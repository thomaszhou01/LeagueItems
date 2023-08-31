import { extendType, nonNull, objectType, stringArg } from 'nexus';
import { NexusGenObjects } from '../../nexus-typegen';
import { getLatestVersion } from '../RiotAPI/DataDragon/getLatestVersion';
import { getChampions } from '../RiotAPI/DataDragon/getChampions';

export const Champion = objectType({
	name: 'Champion',
	definition(t) {
		t.nonNull.string('objectID');
		t.nonNull.string('version');
		t.nonNull.string('id');
		t.nonNull.string('key');
		t.nonNull.string('name');
		t.nonNull.string('title');
		t.nonNull.list.string('tags');
		t.nonNull.string('partype');
		t.nonNull.string('imageURL');
		t.nonNull.string('image');
		t.field('stats', {
			type: 'ChampionStats',
			resolve(parent, args, context) {
				return context.prisma.championStats.findUnique({
					where: { championId: parent.objectID },
				});
			},
		});
	},
});

export const ChampionStats = objectType({
	name: 'ChampionStats',
	definition(t) {
		t.nonNull.float('hp');
		t.nonNull.float('hpperlevel');
		t.nonNull.float('mp');
		t.nonNull.float('mpperlevel');
		t.nonNull.float('movespeed');
		t.nonNull.float('armor');
		t.nonNull.float('armorperlevel');
		t.nonNull.float('spellblock');
		t.nonNull.float('spellblockperlevel');
		t.nonNull.float('attackrange');
		t.nonNull.float('hpregen');
		t.nonNull.float('hpregenperlevel');
		t.nonNull.float('mpregen');
		t.nonNull.float('mpregenperlevel');
		t.nonNull.float('crit');
		t.nonNull.float('critperlevel');
		t.nonNull.float('attackdamage');
		t.nonNull.float('attackdamageperlevel');
		t.nonNull.float('attackspeedperlevel');
		t.nonNull.float('attackspeed');
		t.string('championId');
		t.field('champion', {
			type: 'Champion',
			resolve(parent, args, context) {
				return context.prisma.champion.findUnique({
					where: { objectID: parent.championId },
				});
			},
		});
	},
});

export const ChampionQuery = extendType({
	// 2
	type: 'Query',
	definition(t) {
		t.nonNull.list.nonNull.field('getAllChampions', {
			type: 'Champion',
			resolve(parent, args, context, info) {
				return context.prisma.champion.findMany({
					orderBy: {
						name: 'asc',
					},
				});
			},
		});

		t.field('getSpecificChampions', {
			// 3
			type: 'Champion',
			args: {
				championName: nonNull(stringArg()),
			},
			resolve(parent, args, context, info) {
				return context.prisma.champion.findUnique({
					where: { name: args.championName },
				});
			},
		});
	},
});
