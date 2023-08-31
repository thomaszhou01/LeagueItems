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
		t.nonNull.string('image');
		t.field('stats', {
			type: 'ItemStats',
			resolve(parent, args, context) {
				return context.prisma.itemStats.findUnique({
					where: { itemId: parent.objectID },
				});
			},
		});
	},
});

export const ItemStats = objectType({
	name: 'ItemStats',
	definition(t) {
		t.nonNull.float('ap');
		t.nonNull.float('armorPen');
		t.nonNull.float('lethality');
		t.nonNull.float('ad');
		t.nonNull.float('as');
		t.nonNull.float('crit');
		t.nonNull.float('lifeSteal');
		t.nonNull.float('flatMagicPen');
		t.nonNull.float('percentMagicPen');
		t.nonNull.float('omnivamp');
		t.nonNull.float('physicalVamp');
		t.nonNull.float('armor');
		t.nonNull.float('hp');
		t.nonNull.float('healthRegen');
		t.nonNull.float('mr');
		t.nonNull.float('tenacity');
		t.nonNull.float('haste');
		t.nonNull.float('mana');
		t.nonNull.float('resourceRegen');
		t.nonNull.float('ms');
		t.nonNull.float('range');
		t.string('itemId');
		t.field('item', {
			type: 'Item',
			resolve(parent, args, context) {
				return context.prisma.item.findUnique({
					where: { objectID: parent.itemId },
				});
			},
		});
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
