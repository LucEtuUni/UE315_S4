import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
    imports: [
    ConfigModule.forRoot(),
     GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
	   autoSchemaFile: 'schema.gql',
	    debug: false,
      playground: false,
    }),
    MongooseModule.forRoot(
    'mongodb+srv://root:root@cluster0.j3yot8t.mongodb.net/userstable?retryWrites=true&w=majority'
    ),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
