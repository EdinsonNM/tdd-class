import { getFlyingSuperHeros } from "../super-heros";
test("shoould return fly heors with toMatchSnapshot", () => {
	const flyHeros = getFlyingSuperHeros();
	expect(flyHeros).toMatchSnapshot();
});
test("shoould return fly heors with toMatchInlineSnapshot", () => {
	const flyHeros = getFlyingSuperHeros();
	expect(flyHeros).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "name": "Dynaguy",
		    "powers": Array [
		      "disintegration ray",
		      "fly",
		    ],
		  },
		  Object {
		    "name": "Apogee",
		    "powers": Array [
		      "gravity control",
		      "fly",
		    ],
		  },
		]
	`);
});
