
.PHONY: list
list: ## List all make targets
	@${MAKE} -pRrn : -f $(MAKEFILE_LIST) 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | egrep -v -e '^[^[:alnum:]]' -e '^$@$$' | sort

.PHONY: help
.DEFAULT_GOAL := help
help: ## Prints all the targets in all the Makefiles
	@grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-60s\033[0m %s\n", $$1, $$2}'

.PHONY: check_npm
check_npm: ## Check if npm is installed
	@which npm > /dev/null || (echo "npm is not installed. Please install npm first." && exit 1)

.PHONY: check_node
check_node: ## Check if node is installed
	@which node > /dev/null || (echo "node is not installed. Please install node first." && exit 1)

.PHONY: docusaurus_start
docusaurus_start: check_npm check_node ## Start the Docusaurus server
	npm install && npm start -- --port 4000