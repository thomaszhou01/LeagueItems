import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';
import { getLatestVersion } from '../RiotAPI/DataDragon/getLatestVersion';
import { getChampions } from '../RiotAPI/DataDragon/getChampions';

export const Link = objectType({
	name: 'Link', // 1
	definition(t) {
		// 2
		t.nonNull.string('id'); // 3
		t.nonNull.string('description'); // 4
		t.nonNull.string('url'); // 5
	},
});

export const LinkQuery = extendType({
	// 2
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('feed', {
			// 3
			type: 'Link',
			resolve(parent, args, context, info) {
				// 4
				getChampions().then((response: any) => {});
				return context.prisma.link.findMany();
			},
		});
	},
});

export const LinkMutation = extendType({
	// 1
	type: 'Mutation',
	definition(t) {
		t.nonNull.field('post', {
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
	},
});
