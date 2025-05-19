import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
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
  configService = new ConfigService();
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'words',
          this.configService.get('BASE_URL') ??
            'http://localhost:3000' + '/words',
        ),
      () =>
        this.http.pingCheck(
          'verbs',
          this.configService.get('BASE_URL') ??
            'http://localhost:3000' + '/verbs',
        ),
    ]);
  }
}
