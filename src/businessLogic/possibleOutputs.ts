import { uniqBy } from "lodash";

const min = 1;
const max = 54;
const dicesNum = 4;
export type Result = { value: number; weight: number; path: string };

const getOption = (operator: number, position: number) =>
  (operator >> position) & 1;

const parenthWrap = (expression: string) =>
  1 === expression.length ? expression : "(" + expression + ")";

function getAllOperations(numbers: Result[]) {
  if (2 > numbers.length) return numbers;

  let results: Result[] = [];

  for (
    let operator = 1;
    operator < Math.pow(2, numbers.length) - 1;
    operator++
  ) {
    const leftHandResults = getAllOperations(
      numbers.filter((_, index) => getOption(operator, index))
    );
    const rightHandResults = getAllOperations(
      numbers.filter((_, index) => !getOption(operator, index))
    );

    for (const left of leftHandResults) {
      for (const right of rightHandResults) {
        results.push({
          value: left.value + right.value,
          weight: left.weight + right.weight,
          path: left.path + " + " + right.path,
        });
        results.push({
          value: left.value - right.value,
          weight: left.weight + right.weight + 1,
          path: left.path + " - " + right.path,
        });
        results.push({
          value: left.value * right.value,
          weight: left.weight + right.weight + 10,
          path: parenthWrap(left.path) + " * " + parenthWrap(right.path),
        });
        results.push({
          value: left.value / right.value,
          weight: left.weight + right.weight + 100,
          path: parenthWrap(left.path) + " / " + parenthWrap(right.path),
        });
      }
    }
  }

  return uniqBy(
    results.sort((a: Result, b: Result) =>
      a.value === b.value ? a.weight - b.weight : a.value - b.value
    ),
    "value"
  );
}

export function getPossibleOutputs(dices: number[]) {
  if (dicesNum !== dices.length) throw new Error("must be four dices");

  const possibilities = getAllOperations(
    dices.map((dice) => ({ value: dice, weight: 0, path: String(dice) }))
  ).filter(
    (res) => min <= res.value && max >= res.value && Number.isInteger(res.value)
  );

  return possibilities;
}

// console.log(getPossibleOutputs([6, 2, 6, 4]));
