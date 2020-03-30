import { SELECT_PORTFOLIO_ITEM } from "../constants";

export function selectPortfolioItem(payload) {
  return { type: SELECT_PORTFOLIO_ITEM, payload };
}
