// @flow
import statefulSelectors from '../internalHelpers/_statefulSelectors'
import polish from '../validation/polish'

const stateMap = [undefined, null, 'active', 'focus', 'hover']

function template(state) {
  return `button${state},
  input[type="button"]${state},
  input[type="reset"]${state},
  input[type="submit"]${state}`
}

/** */
type ButtonState = typeof undefined | null | 'active' | 'focus' | 'hover'

/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */

function buttons(...states: Array<ButtonState>) {
  return statefulSelectors(states, template, stateMap)
}

export default polish({
  modulePath: 'shorthands/buttons',
  types: { type: 'enumerable', map: stateMap, matchAll: true },
})(buttons)
