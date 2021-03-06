/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';
angular.module('updater-success', ['ngStorage'])
    .controller('updaterSuccessController', ['$scope', '$state', '$localStorage', '$window', 'navigationService', function ($scope, $state, $localStorage, $window, navigationService) {
        if ($localStorage.successPageAction) {
            $scope.successPageAction = $localStorage.successPageAction;
            $scope.successPageActionMessage = $scope.successPageAction +
                ($scope.endsWith($scope.successPageAction, 'e')  ? 'd' : 'ed');
        }
        if ($localStorage.packages) {
            $scope.packages = $localStorage.packages;
        }
        if (typeof $localStorage.rollbackStarted !== 'undefined') {
            $scope.rollbackStarted = $localStorage.rollbackStarted;
        }
        $scope.back = function () {
            if ($scope.successPageAction) {
                $scope.goToAction($scope.successPageAction);
            } else {
                $window.location.href = '';
            }
        };
        $localStorage.$reset();
        $scope.isHiddenSpinner = false;
        navigationService.load().then(function () {
            $scope.isHiddenSpinner = true;
        });
    }]);
