import { Position, Time, Velocity } from '../traits';
import { CONSTANTS } from '../constants';
import { World } from 'koota';

export const moveBodies = ({ world }: { world: World }) => {
	const { delta } = world.get(Time);

	world.query(Position, Velocity).updateEach(([position, velocity]) => {
		position.x += CONSTANTS.SPEED * velocity.x * delta;
		position.y += CONSTANTS.SPEED * velocity.y * delta;
	});
};
