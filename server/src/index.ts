import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { PrismaClient } from '@prisma/client';
import { context } from './context';
import { updateChampionLists } from './RiotAPI/updateChampStats';

// const prisma = new PrismaClient();
// const schedule = require('node-schedule');
// var cron = require('node-schedule');
// var rule = new cron.RecurrenceRule();
// rule.second = 30;

// schedule.scheduleJob(rule, function () {
// 	console.log('The answer to life, the universe, and everything!');
// 	updateChampionLists(prisma)
// 		.then(async () => {
// 			await prisma.$disconnect();
// 		})
// 		.catch(async (e) => {
// 			console.error(e);
// 			await prisma.$disconnect();
// 			process.exit(1);
// 		});
// });

import { schema } from './schema';

export var leagueVersion = '13.11.1';

export const server = new ApolloServer({
	schema,
	context,
	// plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const port = 4000;
server.listen({ port }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
