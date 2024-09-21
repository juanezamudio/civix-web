/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.LocationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.createMany(input as any))),

        create: procedure.input($Schema.LocationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.create(input as any))),

        deleteMany: procedure.input($Schema.LocationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.deleteMany(input as any))),

        delete: procedure.input($Schema.LocationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.delete(input as any))),

        findFirst: procedure.input($Schema.LocationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).location.findFirst(input as any))),

        findMany: procedure.input($Schema.LocationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).location.findMany(input as any))),

        findUnique: procedure.input($Schema.LocationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).location.findUnique(input as any))),

        updateMany: procedure.input($Schema.LocationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.updateMany(input as any))),

        update: procedure.input($Schema.LocationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).location.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.LocationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.LocationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationGetPayload<T>, Context>) => Promise<Prisma.LocationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.LocationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.LocationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationGetPayload<T>, Context>) => Promise<Prisma.LocationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.LocationFindFirstArgs, TData = Prisma.LocationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LocationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LocationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LocationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LocationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.LocationFindManyArgs, TData = Array<Prisma.LocationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.LocationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.LocationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.LocationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.LocationFindUniqueArgs, TData = Prisma.LocationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.LocationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.LocationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.LocationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.LocationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.LocationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.LocationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.LocationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.LocationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.LocationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.LocationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.LocationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.LocationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.LocationGetPayload<T>, Context>) => Promise<Prisma.LocationGetPayload<T>>
            };

    };
}
