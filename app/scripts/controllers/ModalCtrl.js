(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        $modalProvider.options.keyboard = true;

        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.submit = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };

        modal.createUsername = function () {
            $cookies.putObject('blocChatCurrentUser', modal.username)
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();

