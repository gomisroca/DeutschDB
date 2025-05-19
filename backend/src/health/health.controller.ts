import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
  ) {}
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'words',
          (process.env.BASE_URL ?? 'http://localhost:3000') + '/words',
        ),
      () =>
        this.http.pingCheck(
          'verbs',
          (process.env.BASE_URL ?? 'http://localhost:3000') + '/verbs',
        ),
    ]);
  }
}
