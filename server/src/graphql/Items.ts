import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';
import { getLatestVersion } from '../RiotAPI/DataDragon/getLatestVersion';
import { getChampions } from '../RiotAPI/DataDragon/getChampions';

export const Item = objectType({
	name: 'Item',
	definition(t) {
		t.nonNull.string('objectID');
		t.nonNull.string('id');
		t.nonNull.string('name');
		t.nonNull.list.string('description');
		t.nonNull.string('plaintext');
		t.nonNull.list.string('into');
		t.nonNull.list.string('from');
		t.nonNull.string('goldTotalCost');
		t.nonNull.list.string('tags');
		t.nonNull.string('imageURL');
	},
});

export const ItemQuery = extendType({
	// 2
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('getAllItems', {
			// 3
			type: 'Item',
			resolve(parent, args, context, info) {
				// 4
				return context.prisma.item.findMany();
			},
		});

		t.field('getSpecificItems', {
			// 3
			type: 'Item',
			args: {
				itemName: nonNull(stringArg()),
			},
			resolve(parent, args, context, info) {
				return context.prisma.item.findUnique({
					where: { id: args.itemName },
				});
			},
		});
	},
});
