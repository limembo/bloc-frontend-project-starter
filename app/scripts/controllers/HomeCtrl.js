(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {
        var home = this;
        home.rooms = Room.all;

        home.addRoom = function() {
            $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                size: 'lg',
                controller: 'ModalCtrl as modal'
            });
        }

        home.setCurrentRoom = function(room){
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
            console.log(home.messages);
        };
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
