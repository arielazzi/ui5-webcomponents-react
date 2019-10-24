#! /bin/bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]
then
    echo "This is a pull request build - skip npm release"
    exit 0
fi

CHANGED_PACKAGES=$(git diff-tree --no-commit-id --name-only -r -m  ${TRAVIS_COMMIT} | \
    grep -e "^packages/" | \
    grep -v -e "packages/docs")

echo $CHANGED_PACKAGES

if [ -z "${CHANGED_PACKAGES}" ]
then
    echo "No npm relevant packages changed - skip npm release"
    exit 0
fi

#git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "$TRAVIS_BRANCH" > /dev/null 2>&1;
#git checkout -b "release/${PACKAGE_VERSION}"
#git push --follow-tags "https://$GH_TOKEN@github.com/$TRAVIS_REPO_SLUG" "release/${PACKAGE_VERSION}" > /dev/null 2>&1;

cd ${TRAVIS_BUILD_DIR}/build/node_modules/charts && npm publish --access public --tag dev
cd ${TRAVIS_BUILD_DIR}/build/node_modules/main && npm publish --access public --tag dev
cd ${TRAVIS_BUILD_DIR}/build/node_modules/base && npm publish --access public --tag dev