# Frontend Testing Guideline
​
Tech/Library used in all projects:
​
- jest: for test runner and assertion
- react testing library: for react testing
- eslint-plugin-prospace-custom: for linting the tests file to be more consistent
​
you can get the eslint plugin by installing eslint-config-prospace https://www.npmjs.com/package/eslint-config-prospace
​
Additional library used(library that is used in the specific projects):
​
- jest-fetch-mock: used for mocking fetch result
- jest-localstorage-mock: used for mocking localstorage result
- mock-service-worker(msw): user for mocking the network call
​
## Folder Structure
​
```
+-- pages
|   +-- Home
|     +-- components
|        +-- Header
|           +-- __test__
|               +-- Header.test.js
|           +-- index.js
|     +-- __test__
|        +-- Home.test.js
|        +-- mocks.js
|     +-- index.js
+-- testHelpers
|     +-- renderer.js
```
​
as you can see here make sure to put the tests code close to the component/source code that you are testing, this is to make sure that the developer doesn't get confused on what code that we are testing on the test file
​
## Test Type
​
we have 2 types that we will use in the test name/title as a convention ([see test example down below](#test-example)):
​
- Unit\_\_test
- Integration\_\_test
​
use Unit\_\_test if you testing single component/function, for example:
​
- test if the onclick function is running or not in the Button component
- test if certain function is returning the correct value
- etc.
​
use Integration\_\_test if you want to test the flow of the component/function, for example:
​
- test the pagination flow in the Home page
- test the navigation flow of the website
- etc.
​
## Element Selector
​
Because we are using react-testing-library there is always the case when you want to use data-testid for selecting the element ([see test example down below](#test-example)). you can use this format for the testid:
​
```
Component__customNameForTheElement
```
​
## Test Example
​
```javascript
// suppose you want to test if the error message is showing up in the ErrorPage component
​
// ErrorPage/index.js
function ErrorPage({ errorMessage }) {
  return (
    <div>
      <div data-testid="ErrorPage__error-message">{errorMessage}</div>
    </div>
  );
}
​
// ErrorPage/__test__/ErrorPage.test.js
describe("Unit__test-ErrorPage", () => {
  test("Should show error message from props correctly", () => {
    const { queryByTestId } = render(<ErrorPage errorMessage="test-message" />);
​
    expect(queryByTestId("ErrorPage__error-message").textContent).toBe(
      "test-message"
    );
  });
});
```
​
## Additional Info
​
- you can use renderWithRedux or renderWithRouter from the renderer.js file to render component with react-redux or react-router-dom (ask the team to get the code if you don't know how to get it)
​
some link to reference:
​
- [Best practice for testing in react](https://increment.com/testing/designing-automated-tests-for-react/)
- [React testing library tutorial](https://www.youtube.com/watch?v=YQLn7ycfzEo)
- [Axios mocking tutorial](https://www.youtube.com/watch?