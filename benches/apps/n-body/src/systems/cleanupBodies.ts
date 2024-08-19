import { Explosion, Position } from '@sim/n-body/src/components';
import { createRemoved } from 'koota';
import * as THREE from 'three';
import { InstancedMesh } from '../components/InstancedMesh';

const Removed = createRemoved();

const zeroScaleMatrix = new THREE.Matrix4().makeScale(0, 0, 0);

export function cleanupBodies({ world }: { world: Koota.World }) {
	const ents = world.query(Removed(Explosion, Position));

	const instanceEnt = world.query(InstancedMesh)[0];
	if (instanceEnt === undefined) return;

	const instancedMesh = world.get(InstancedMesh).object[instanceEnt];

	for (const e of ents) {
		instancedMesh.setMatrixAt(e, zeroScaleMatrix);
	}

	instancedMesh.instanceMatrix.needsUpdate = true;
}