(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.addRoom = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                size: 'lg',
                controller: 'ModalCtrl as modal'
            });

        }
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();

