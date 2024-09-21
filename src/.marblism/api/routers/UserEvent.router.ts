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

        createMany: procedure.input($Schema.UserEventInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.createMany(input as any))),

        create: procedure.input($Schema.UserEventInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.create(input as any))),

        deleteMany: procedure.input($Schema.UserEventInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.deleteMany(input as any))),

        delete: procedure.input($Schema.UserEventInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.delete(input as any))),

        findFirst: procedure.input($Schema.UserEventInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userEvent.findFirst(input as any))),

        findMany: procedure.input($Schema.UserEventInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userEvent.findMany(input as any))),

        findUnique: procedure.input($Schema.UserEventInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userEvent.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserEventInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.updateMany(input as any))),

        update: procedure.input($Schema.UserEventInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userEvent.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserEventCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserEventCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserEventGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserEventGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserEventGetPayload<T>, Context>) => Promise<Prisma.UserEventGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserEventDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserEventDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserEventGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserEventGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserEventGetPayload<T>, Context>) => Promise<Prisma.UserEventGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserEventFindFirstArgs, TData = Prisma.UserEventGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserEventFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserEventGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserEventFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserEventFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserEventGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserEventGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserEventFindManyArgs, TData = Array<Prisma.UserEventGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserEventFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserEventGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserEventFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserEventFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserEventGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserEventGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserEventFindUniqueArgs, TData = Prisma.UserEventGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserEventFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserEventGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserEventFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserEventFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserEventGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserEventGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserEventUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserEventUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserEventUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserEventGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserEventGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserEventUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserEventUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserEventGetPayload<T>, Context>) => Promise<Prisma.UserEventGetPayload<T>>
            };

    };
}
