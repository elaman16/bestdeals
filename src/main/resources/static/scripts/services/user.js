'usr strict';

var User = (function(){
	
	var fields = {
		name : App.validateRules.name,
		email : App.validateRules.email,
		mobile : App.validateRules.mobile,
		userType : App.validateRules.dropdown,
		plan : App.validateRules.dropdown,
		password : App.validateRules.name
	};
	App.bindValidation('userRegisterform', fields, function(){
		 var userObj = App.serializeObject('userRegisterform');
		 User.create(userObj);
	});
	
	var URL = App.URL().BASE+App.URL().USER;
	var findUserById = function(userId){
		console.log('UserId :::: ', userId);
		App.GetRequest(URL+userId).then(function(res){
			console.log('findUserById ::: ',res);
			var obj = res.data;
			$('#editId').val(obj.id);
			$('#editName').val(obj.name);
			$('#editEmail').val(obj.email);
			$('#editMobile').val(obj.mobile);
			$('#editUserType').val(obj.userType);
			$('#editPassword').val(obj.password);
			$('#editPlan').val(obj.planId);
		});
	};

	var create = function(userObj){
		if(userObj.plan){
			userObj.plan = {id: parseInt(userObj.plan)};
		}else{
			userObj.plan = null;
		}
		App.PostRequest(URL, userObj).then(function(res){
			console.log('User Create ::: ', userObj);
			if(res.statusCode == '500'){
				$('#errorMsg').html(res.message).fadeOut(20000);
			}else{
				window.location.reload();
			}
		});
	};

	var update = function(){
		var userObj = App.serializeObject('editUserform');
		if(userObj.plan){
			userObj.plan = {'id': userObj.plan};
		}else{
			userObj.plan = null;
		}
		App.PutRequest(URL, userObj).then(function(res){
			console.log('User Create ::: ', userObj);
			if(res.statusCode == '500'){
				$('#updateErrorMsg').html(res.message).fadeOut(10000);
			}else{
				window.location.reload();
			}
		});

	};

	var findUserDetailById = function(id){
		var URL = App.URL().BASE + App.URL().USER_DETAIL;
		App.GetRequest(URL+id).then(function(res){
			var obj = res.data.user;
			$('#editId').val(res.data.id);
			$('#editShopName').val(res.data.shopName);
			$('#editLatitude').val(res.data.latitude);
			$('#editLongitude').val(res.data.longitude);

			$('#editUserId').val(obj.id);
			$('#editName').val(obj.name);
			$('#editEmail').val(obj.email);
			$('#editMobile').val(obj.mobile);
			$('#editUserType').val(obj.userType);
			$('#editPassword').val(obj.password);
			$('#editPlan').val(obj.plan.id);
		});
	};
	var updateUserDetail = function(){
        var URL = App.URL().BASE + App.URL().USER_DETAIL;
		// var userObj = App.serializeObject('editUserform');
        var userObj = $('#editUserform').serializeObject();
		/*if(userObj.user.plan){
			userObj.user.plan = {'id': userObj.user.plan};
		}else{
			userObj.user.plan = null;
		}*/
		App.PutRequest(URL, userObj).then(function(res){
			console.log('UserDetail Create ::: ', userObj);
			if(res.statusCode == '500'){
				$('#updateErrorMsg').html(res.message).fadeOut(10000);
			}else{
				window.location.reload();
			}
		});

	};
	
	var deleteUser = function(userId){
		App.DeleteRequest(URL+userId).then(function(res){
			window.location.reload();
		});
	};

	 $('#userListTable').DataTable({
         "paging": true,
         "lengthChange": false,
         "searching": true,
         "ordering": true,
         "info": true,
         "autoWidth": false
       });
	 /*$('#merchantTable').DataTable({
         "paging": true,
         "lengthChange": false,
         "searching": true,
         "ordering": true,
         "info": true,
         "autoWidth": false
       });
	 $('#franchiseTable').DataTable({
         "paging": true,
         "lengthChange": false,
         "searching": true,
         "ordering": true,
         "info": true,
         "autoWidth": false
       });
	 $('#publicUserTable').DataTable({
         "paging": true,
         "lengthChange": false,
         "searching": true,
         "ordering": true,
         "info": true,
         "autoWidth": false
       });
*/
	return {
		create: create,
		update: update,
		findUserById: findUserById,
		deleteUser: deleteUser,
        findUserDetailById : findUserDetailById,
        updateUserDetail : updateUserDetail
	}
})();

