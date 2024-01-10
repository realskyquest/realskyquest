import type { Organization, WithContext } from 'schema-dts';

export type Schema = Organization | WithContext<Organization>;

export function serializeSchema(Organization: Schema) {
	return `<script type="application/ld+json">${JSON.stringify(Organization, null, 2)}</script>`;
}
