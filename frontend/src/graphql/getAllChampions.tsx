import { gql } from '@apollo/client';

export const getAllChampions = gql`
	query {
		getAllChampions {
			objectID
			version
			id
			key
			name
			title
			tags
			partype
			stats {
				hp
				hpperlevel
				mp
				mpperlevel
				movespeed
				armor
				armorperlevel
				spellblock
				spellblockperlevel
				attackrange
				hpregen
				hpregenperlevel
				crit
				critperlevel
				attackdamage
				attackdamageperlevel
				attackspeedperlevel
				attackspeed
				championId
			}
		}
	}
`;
