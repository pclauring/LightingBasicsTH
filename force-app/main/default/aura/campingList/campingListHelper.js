({
    handleAddItem: function(component, event, helper) {
        var newItem = event.getParam("item");
        helper.createExpense(component, newItem); //need to create the call back to handle the new item event
    }

})
