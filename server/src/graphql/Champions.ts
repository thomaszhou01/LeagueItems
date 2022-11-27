import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';
import { getLatestVersion } from '../RiotAPI/DataDragon/getLatestVersion';
import { getChampions } from '../RiotAPI/DataDragon/getChampions';

export const Champion = objectType({
	name: 'Champion',
	definition(t) {
		t.nonNull.string('version');
		t.nonNull.string('id');
		t.nonNull.string('key');
		t.nonNull.string('name');
		t.nonNull.string('title');
		t.nonNull.string('blurb');
		t.list.string('tags');
		t.nonNull.string('partype');
	},
});

// export const ChampionQuery = extendType({
// 	// 2
// 	type: 'Query',
// 	definition(t) {
// 		t.nonNull.list.nonNull.field('feeding', {
// 			// 3
// 			type: 'Champion',
// 			resolve(parent, args, context, info) {
// 				// 4
// 				return context.prisma.link.findMany();
// 			},
// 		});
// 	},
// });

export const ChampionMutation = extendType({
	// 1
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('posting', {
			// 2
			type: 'Link',
			args: {
				// 3
				description: nonNull(stringArg()),
				url: nonNull(stringArg()),
			},

			resolve(parent, args, context) {
				const newLink = context.prisma.link.create({
					// 2
					data: {
						description: args.description,
						url: args.url,
					},
				});
				return newLink;
			},
		});

		t.nonNull.field('addChamp', {
			// 2
			type: 'String',

			resolve(parent, args, context) {
				getChampions().then((response: any) => {
					// for (var champ in response['data']['data']) {
					// 	console.log(champ);
					// }

					const newChamp = context.prisma.champion.create({
						// 2
						data: response['Aatrox'],
					});
				});
				return 'newLink';
			},
		});
	},
});
