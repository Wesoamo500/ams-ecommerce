
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export class TypeORMConfig {
    constructor(private config: ConfigService) { }
    public getConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.get('POSTGRES_HOST'),
            port: parseInt(this.config.get('POSTGRES_PORT')),
            username: this.config.get('POSTGRES_USER'),
            password: this.config.get('POSTGRES_PASSWORD') as string,
            database: this.config.get('POSTGRES_DATABASE'),
            entities: ['src/**/*.entity{.ts,.js}'],
        }
    }
}

