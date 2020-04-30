import { getFlyingSuperHeros } from "../super-heros";
test("", () => {
	const flyHeros = getFlyingSuperHeros();
	expect(flyHeros).toMatchSnapshot();
});
