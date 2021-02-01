import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
import { Options } from '@sentry/types';
export declare type SentryModuleOptions = Omit<Options, 'integrations'> & {
    integrations?: any[];
};
export interface SentryOptionsFactory {
    createSentryModuleOptions(): Promise<SentryModuleOptions> | SentryModuleOptions;
}
export interface SentryModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    inject?: any[];
    useClass?: Type<SentryOptionsFactory>;
    useExisting?: Type<SentryOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<SentryModuleOptions> | SentryModuleOptions;
}
