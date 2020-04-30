import { getFlyingSuperHeros } from "../super-heros";

test("return superheros that can fly", () => {
	const flyHeros = getFlyingSuperHeros();
	expect(flyHeros).toMatchSnapshot();
});
