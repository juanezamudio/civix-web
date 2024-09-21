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

        createMany: procedure.input($Schema.UserResourceInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.createMany(input as any))),

        create: procedure.input($Schema.UserResourceInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.create(input as any))),

        deleteMany: procedure.input($Schema.UserResourceInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.deleteMany(input as any))),

        delete: procedure.input($Schema.UserResourceInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.delete(input as any))),

        findFirst: procedure.input($Schema.UserResourceInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userResource.findFirst(input as any))),

        findMany: procedure.input($Schema.UserResourceInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userResource.findMany(input as any))),

        findUnique: procedure.input($Schema.UserResourceInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userResource.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserResourceInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.updateMany(input as any))),

        update: procedure.input($Schema.UserResourceInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userResource.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserResourceCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserResourceCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserResourceGetPayload<T>, Context>) => Promise<Prisma.UserResourceGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserResourceDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserResourceDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserResourceGetPayload<T>, Context>) => Promise<Prisma.UserResourceGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserResourceFindFirstArgs, TData = Prisma.UserResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserResourceFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserResourceFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserResourceFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserResourceFindManyArgs, TData = Array<Prisma.UserResourceGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserResourceFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserResourceGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserResourceFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserResourceFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserResourceGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserResourceGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserResourceFindUniqueArgs, TData = Prisma.UserResourceGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserResourceFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserResourceGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserResourceFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserResourceFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserResourceGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserResourceGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserResourceUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserResourceUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserResourceUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserResourceGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserResourceGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserResourceUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserResourceUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserResourceGetPayload<T>, Context>) => Promise<Prisma.UserResourceGetPayload<T>>
            };

    };
}
