interface PaginateOptions<T extends { id: string }> {
  model: {
    findMany: (args: Record<string, unknown>) => Promise<T[]>;
    count?: (args: Record<string, unknown>) => Promise<number>;
  };
  query: { where?: Record<string, unknown> };
  take?: number;
  cursor?: string;
  skip?: number;
  includeTotal?: boolean;
}

export async function paginate<T extends { id: string }>({
  model,
  query,
  take = 20,
  cursor,
  skip,
  includeTotal = false,
}: PaginateOptions<T>) {
  const data = await model.findMany({
    ...query,
    take: take + 1,
    cursor: cursor ? { id: cursor } : undefined,
    skip: cursor ? 1 : skip,
  });

  let nextCursor: string | null = null;

  if (data.length > take) {
    const nextItem = data.pop();

    if (nextItem) {
      nextCursor = nextItem.id;
    }
  }

  let total: number | undefined;

  if (includeTotal && model.count) {
    total = await model.count({
      where: query.where,
    });
  }

  return {
    data,
    nextCursor,
    total,
  };
}
