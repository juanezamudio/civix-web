/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createCategoryRouter from "./Category.router";
import createLocationRouter from "./Location.router";
import createEventRouter from "./Event.router";
import createResourceRouter from "./Resource.router";
import createUserEventRouter from "./UserEvent.router";
import createUserResourceRouter from "./UserResource.router";
import createChatSessionRouter from "./ChatSession.router";
import createMessageRouter from "./Message.router";
import createUserRouter from "./User.router";
import createAccountRouter from "./Account.router";
import createRagVectorRouter from "./RagVector.router";
import createSessionRouter from "./Session.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as LocationClientType } from "./Location.router";
import { ClientType as EventClientType } from "./Event.router";
import { ClientType as ResourceClientType } from "./Resource.router";
import { ClientType as UserEventClientType } from "./UserEvent.router";
import { ClientType as UserResourceClientType } from "./UserResource.router";
import { ClientType as ChatSessionClientType } from "./ChatSession.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";
import { ClientType as SessionClientType } from "./Session.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        category: createCategoryRouter(router, procedure),
        location: createLocationRouter(router, procedure),
        event: createEventRouter(router, procedure),
        resource: createResourceRouter(router, procedure),
        userEvent: createUserEventRouter(router, procedure),
        userResource: createUserResourceRouter(router, procedure),
        chatSession: createChatSessionRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        user: createUserRouter(router, procedure),
        account: createAccountRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
        session: createSessionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    category: CategoryClientType<AppRouter>;
    location: LocationClientType<AppRouter>;
    event: EventClientType<AppRouter>;
    resource: ResourceClientType<AppRouter>;
    userEvent: UserEventClientType<AppRouter>;
    userResource: UserResourceClientType<AppRouter>;
    chatSession: ChatSessionClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    account: AccountClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
}
