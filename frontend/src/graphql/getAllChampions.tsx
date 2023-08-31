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
			imageURL
			image
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
				mpregen
				mpregenperlevel
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
