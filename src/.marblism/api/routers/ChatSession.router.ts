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

        createMany: procedure.input($Schema.ChatSessionInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.createMany(input as any))),

        create: procedure.input($Schema.ChatSessionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.create(input as any))),

        deleteMany: procedure.input($Schema.ChatSessionInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.deleteMany(input as any))),

        delete: procedure.input($Schema.ChatSessionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.delete(input as any))),

        findFirst: procedure.input($Schema.ChatSessionInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).chatSession.findFirst(input as any))),

        findMany: procedure.input($Schema.ChatSessionInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).chatSession.findMany(input as any))),

        findUnique: procedure.input($Schema.ChatSessionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).chatSession.findUnique(input as any))),

        updateMany: procedure.input($Schema.ChatSessionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.updateMany(input as any))),

        update: procedure.input($Schema.ChatSessionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).chatSession.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ChatSessionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ChatSessionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatSessionGetPayload<T>, Context>) => Promise<Prisma.ChatSessionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ChatSessionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ChatSessionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatSessionGetPayload<T>, Context>) => Promise<Prisma.ChatSessionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ChatSessionFindFirstArgs, TData = Prisma.ChatSessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ChatSessionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChatSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatSessionFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatSessionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChatSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChatSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ChatSessionFindManyArgs, TData = Array<Prisma.ChatSessionGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ChatSessionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ChatSessionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatSessionFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatSessionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ChatSessionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ChatSessionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ChatSessionFindUniqueArgs, TData = Prisma.ChatSessionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ChatSessionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ChatSessionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ChatSessionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ChatSessionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ChatSessionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ChatSessionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ChatSessionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ChatSessionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ChatSessionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ChatSessionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ChatSessionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ChatSessionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ChatSessionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ChatSessionGetPayload<T>, Context>) => Promise<Prisma.ChatSessionGetPayload<T>>
            };

    };
}
