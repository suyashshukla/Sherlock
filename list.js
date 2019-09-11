angular.module('apps',[])
.component('stuff',
{
template : 
'<h1>{{$ctrl.data}}</h1>',
controller : function List(){
    this.data = 'Hello World!'
}
});