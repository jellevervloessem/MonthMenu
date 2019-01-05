    /**
     * Refresh the display with items from the table.
     * If offline sync is enabled, the local table will be synchronized
     * with the server table before displaying the todo items.
     */

    function refreshDisplay(syncTable) {
        updateSummaryMessage('Loading Data from Azure');

        if (useOfflineSync) {
            syncLocalTable(syncTable).then(displayItems(syncTable))
        } else {
            displayItems(syncTable)
        }
    }

    /**
     * Synchronize local table with the table on the server.
     * We do this by pushing local changes to the server and then
     * pulling the latest changes from the server.
     */
    function syncLocalTable(syncTable) {
        return syncContext
            .push()
            .then(function () {
                ////////////////////////pull multiple tables, or only the necessary one
                return syncContext.pull(new WindowsAzure.Query(syncTable));
            });
    }

    /**
     * Displays the todo items
     */
    function displayItems(syncTable) {
        // Replace code to display table specific content
        // 


        // Execute a query for uncompleted items and process
        syncTable
            .where({
                complete: false
            }) // Set up the query
            .read() // Read the results
            .then(createTodoItemList, handleError); ////////////// TODO createxxxitemlist
    }