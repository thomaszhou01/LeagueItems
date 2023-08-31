import { gql } from '@apollo/client';

export const getAllItems = gql`
	query {
		getAllItems {
			objectID
			id
			name
			description
			plaintext
			into
			from
			goldTotalCost
			tags
			imageURL
			image
			stats {
				ap
				ad
				armorPen
				lethality
				as
				crit
				lifeSteal
				flatMagicPen
				percentMagicPen
				omnivamp
				physicalVamp
				armor
				hp
				healthRegen
				mr
				tenacity
				haste
				mana
				resourceRegen
				ms
				range
				itemId
			}
		}
	}
`;
