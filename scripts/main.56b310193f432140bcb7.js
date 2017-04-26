webpackJsonp([0],{105:function(e,t,n){"use strict";var a=n(233),r=(n.n(a),new a.Dispatcher);t.a=r},151:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),function(e){return a.createElement("h4",{className:"text-primary"},"Loading....",a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-fw"}))});t.a=r},152:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(232),o=(n.n(r),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),i=function(){function e(t,n){var o=this;a(this,e),this._emitter=new r.EventEmitter,this._changed=!1,this._dispatcher=t,this.dispatchToken=t.register(function(e){o._invokeOnDispatch(e)}),this._cleanStateFn=n,this._state=this._cleanStateFn()}return o(e,[{key:"emitChange",value:function(){this._changed=!0}},{key:"_updateStateAndEmit",value:function(e){this._state=Object.assign({},this._state,e),this.emitChange()}},{key:"hasChanged",value:function(){return this._changed}},{key:"addChangeListener",value:function(e){return this._emitter.addListener("change",e)}},{key:"_cleanState",value:function(){this._changed=!1,this._state=this._cleanStateFn()}},{key:"_invokeOnDispatch",value:function(e){this._changed=!1,this._onDispatch(e),this._changed&&this._emitter.emit("change")}},{key:"_onDispatch",value:function(e){}}]),e}();t.a=i},237:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(152),s=n(82),u=n(105),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,function(){return{sage:void 0,validations:new Map,savedId:void 0}}))}return i(t,e),l(t,[{key:"getState",value:function(){return this._state}},{key:"_onDispatch",value:function(e){switch(e.type){case s.i.LOADED_SAGE:var t=e.payload;this._updateStateAndEmit({sage:t});break;case s.i.REMOVED_SAGE:this._updateStateAndEmit({sage:null});break;case s.i.SAVED_SAGE:var n=e.payload;this._updateStateAndEmit({savedId:n});break;case s.i.SAVE_SAGE_FAILED:var r=e.payload;this._updateStateAndEmit({validations:new Map([].concat(a(Object.keys(r.errors).map(function(e){return[e,r.errors[e].join()]}))))});break;case s.i.CLEAR_VALIDATIONS:this._updateStateAndEmit({validations:new Map});break;case s.i.CLEAR_SAVED_ID:this._updateStateAndEmit({savedId:void 0})}}}]),t}(c.a),p=new f(u.a);t.a=p},238:function(e,t,n){"use strict";function a(e){i.a.dispatch({payload:e,type:c.a.ADD_GREETING})}function r(e){i.a.dispatch({payload:e,type:c.a.NEW_GREETING_CHANGED})}function o(e){i.a.dispatch({payload:e,type:c.a.REMOVE_GREETING})}var i=n(105),c=n(239);t.c=a,t.b=r,t.a=o},239:function(e,t,n){"use strict";var a={ADD_GREETING:"GreetingActionTypes.ADD_GREETING",REMOVE_GREETING:"GreetingActionTypes.REMOVE_GREETING",NEW_GREETING_CHANGED:"GreetingActionTypes.NEW_GREETING_CHANGED"};t.a=a},468:function(e,t,n){"use strict";function a(){return r.createElement(o.Route,{path:"/",component:f.a},r.createElement(o.IndexRedirect,{to:"/greeting"}),r.createElement(o.Route,{path:"greeting",component:i.a}),r.createElement(o.Route,{path:"dashboard",component:i.a}),r.createElement(o.Route,{path:"sages",component:c.a}),r.createElement(o.Route,{path:"sage/detail/:id",component:s.a}),r.createElement(o.Route,{path:"sage/edit/:id",component:u.a}),r.createElement(o.Route,{path:"sayings",component:i.a}),r.createElement(o.Route,{path:"about",component:l.a}))}var r=n(0),o=(n.n(r),n(69)),i=n(472),c=n(478),s=n(476),u=n(477),l=n(470),f=n(474);t.a=a},470:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),function(){return a.createElement("div",{className:"container"},a.createElement("h2",null,"About"),a.createElement("p",null,'Arul "Socrates" Aruldas is a wise old sage often given to spouting sayings that convey wisdom and knowledge far beyond his years.  It was felt that these gems could not be allowed to slip through the cracks.  Here they are preserved for posterity.  Noted down by the bystanders and witnesses to his greatness.'),a.createElement("p",null,"Occasionally other colleagues comments have been jotted down as well. They exist to be a contrast the wisdom in Arul's sayings - we are not worthy!"),a.createElement("h3",null,"About the app"),a.createElement("p",null,"Built using a combination of React, TypeScript and Flux. Hosted on Azure."),a.createElement("h3",null,"Version"),a.createElement("p",null,"This is version: ","1.0.0.1493216657859"," "))});t.a=r},471:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(238),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onClick=function(e){s.a(n.props.targetOfGreeting)},n}return o(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("p",{style:{color:"pink"}},"Hello ",this.props.targetOfGreeting,"!",c.a.createElement("button",{className:"btn btn-default btn-danger",onClick:this._onClick},"Remove"))}}]),t}(c.a.Component);t.a=l},472:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(486),u=n(473),l=n(471),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(){n.setState(n._getStateFromStores())},n.state=n._getStateFromStores(),n}return o(t,e),f(t,[{key:"componentWillMount",value:function(){this.eventSubscription=s.a.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){this.eventSubscription.remove()}},{key:"render",value:function(){var e=this.state,t=e.greetings,n=e.newGreeting;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h1",null,"Hello People!"),c.a.createElement(u.a,{newGreeting:n}),t.map(function(e,t){return c.a.createElement(l.a,{key:t,targetOfGreeting:e})}))}},{key:"_getStateFromStores",value:function(){return s.a.getState()}}]),t}(c.a.Component);t.a=p},473:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(238),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleNewGreetingChange=function(e){var t=e.target.value;s.b(t)},n._onSubmit=function(e){e.preventDefault(),n._preventSubmission||s.c(n.props.newGreeting)},n}return o(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("form",{role:"form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Who would you like to greet?",value:this.props.newGreeting,style:{color:"#FF69B4"},onChange:this._handleNewGreetingChange}),c.a.createElement("button",{type:"submit",className:"btn btn-default btn-primary",onClick:this._onSubmit,disabled:this._preventSubmission},"Add greeting")))}},{key:"_preventSubmission",get:function(){return!this.props.newGreeting}}]),t}(c.a.Component);t.a=l},474:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(475),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(s.a,{path:this.props.location.pathname,routes:this.props.routes}),this.props.children)}}]),t}(c.a.Component);t.a=l},475:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),n(69)),o=n(235),i=n(236),c=(n.n(i),function(e){var t=e.path;return a.createElement(o.Navbar,{bsStyle:"default"},a.createElement(o.Navbar.Header,null,a.createElement(o.Navbar.Brand,null,a.createElement(r.Link,{to:"/"},a.createElement("span",{className:"brand-title"},"Proverb"))),a.createElement(o.Navbar.Toggle,null)),a.createElement(o.Navbar.Collapse,null,a.createElement(o.Nav,{activeHref:t},a.createElement(i.LinkContainer,{to:"/dashboard"},a.createElement(o.NavItem,{eventKey:0},a.createElement("i",{className:"fa fa-dashboard"})," Dashboard")),a.createElement(i.LinkContainer,{to:"/sages"},a.createElement(o.NavItem,{eventKey:1},a.createElement("i",{className:"fa fa-users"})," Sages")),a.createElement(i.LinkContainer,{to:"/sayings"},a.createElement(o.NavItem,{eventKey:2},a.createElement("i",{className:"fa fa-comment"})," Sayings"))),a.createElement(o.Nav,{pullRight:!0},a.createElement(i.LinkContainer,{to:"/about"},a.createElement(o.NavItem,{eventKey:1},"About")))))});t.a=c},476:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(69),u=n(1),l=n.n(u),f=n(237),p=n(82),h=n(151),m=n(482),y=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(){n.setState(function(e,t){return Object.assign(e,n.getSageFromStore(t.params.id))})},n.state=n.getSageFromStore(e.params.id),n}return o(t,e),y(t,[{key:"getSageFromStore",value:function(e){var t=f.a.getState(),n=parseInt(e);return t.sage&&t.sage.id===n?{sage:t.sage}:{sage:void 0}}},{key:"componentWillMount",value:function(){this.eventSubscription=f.a.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){this.eventSubscription.remove()}},{key:"componentDidMount",value:function(){this.state.sage||this.loadSage(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.params.id!==e.params.id&&this.loadSage(e.params.id)}},{key:"loadSage",value:function(e){p.c(parseInt(e))}},{key:"render",value:function(){var e=this.state.sage;return c.a.createElement("div",{className:"container"},e?c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(s.Link,{to:"/sage/edit/"+this.props.params.id},c.a.createElement("i",{className:"fa fa-pencil fa-lg"})," Edit")),c.a.createElement("h2",null,"Sage Details: ",e?e.name:null),c.a.createElement("div",{className:"form-horizontal"},c.a.createElement(m.a,{label:"Name",value:e.name}),c.a.createElement(m.a,{label:"Username",value:e.userName}),c.a.createElement(m.a,{label:"Email",value:e.email}),c.a.createElement(m.a,{label:"Date of Birth",value:l()(e.dateOfBirth).format("ll")}),c.a.createElement(m.a,{label:"Sagacity",value:e.sagacity}))):c.a.createElement(h.a,null))}}]),t}(c.a.Component);t.a=d},477:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=n.n(c),u=n(237),l=n(82),f=n(151),p=n(483),h=n(487),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),y=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(){var e=u.a.getState();e.savedId?n.props.router.push("/sage/detail/"+n.props.params.id):n.setState(function(t,a){return Object.assign(t,n.getSageAndValidationsFromStore(a.params.id,e))})},n._onFieldChange=function(e){var t=e.target,r=t.name,o=t.value;n.setState(function(e,t){return Object.assign(e,{hasChanges:!0,sage:Object.assign(e.sage,a({},r,o))})})},n._onClickSave=function(e){e.preventDefault(),n.canSave&&l.a(n.state.sage)},n._onClickRemove=function(e){e.preventDefault(),n.canRemove&&l.b(n.state.sage.id)},n.state=Object.assign(n.getSageAndValidationsFromStore(e.params.id,u.a.getState()),{hasChanges:!1,isSavingOrRemoving:!1}),n}return i(t,e),m(t,[{key:"getSageAndValidationsFromStore",value:function(e,t){var n=parseInt(e);return t.sage&&t.sage.id===n?{sage:t.sage,validations:t.validations}:{sage:void 0,validations:new Map}}},{key:"componentWillMount",value:function(){this.eventSubscription=u.a.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){this.eventSubscription.remove()}},{key:"componentDidMount",value:function(){this.state.sage||this.loadSage(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){this.props.params.id!==e.params.id&&this.loadSage(e.params.id)}},{key:"loadSage",value:function(e){l.c(parseInt(e))}},{key:"render",value:function(){var e=this.state,t=e.sage,a=e.hasChanges,r=e.validations;return s.a.createElement("div",{className:"container"},t?s.a.createElement("form",{name:"form",role:"form"},s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-info",disabled:!this.canSave,onClick:this._onClickSave},s.a.createElement("i",{className:"fa fa-save fa-lg"})," Save"),s.a.createElement("button",{className:"btn btn-danger",disabled:!this.canRemove,"ng-click":"vm.remove()"},s.a.createElement("i",{className:"fa fa-trash fa-lg"})," Remove"),a?s.a.createElement("i",{className:"fa fa-asterisk fa-lg text-warning"}):null),s.a.createElement("h2",null,"Sage Edit: ",t?t.name:null),s.a.createElement("div",{className:"form-horizontal"},s.a.createElement(p.a,{label:"Name",name:"name",value:n.i(h.a)(t.name),onFieldChange:this._onFieldChange,errors:r}),s.a.createElement(p.a,{label:"Username",name:"userName",value:n.i(h.a)(t.userName),onFieldChange:this._onFieldChange,errors:r}),s.a.createElement(p.a,{label:"Email",name:"email",value:n.i(h.a)(t.email),onFieldChange:this._onFieldChange,errors:r}),s.a.createElement(p.a,{label:"Date of Birth",name:"dateOfBirth",type:"date",value:n.i(h.b)(t.dateOfBirth),onFieldChange:this._onFieldChange,errors:r}),s.a.createElement(p.a,{label:"Sagacity",name:"sagacity",value:n.i(h.a)(t.sagacity),onFieldChange:this._onFieldChange,errors:r}))):s.a.createElement(f.a,null))}},{key:"canSave",get:function(){return this.state.hasChanges&&!this.isSavingOrRemoving}},{key:"canRemove",get:function(){return!this.isSavingOrRemoving}},{key:"isSavingOrRemoving",get:function(){return this.state.isSavingOrRemoving}}]),t}(s.a.Component);t.a=y},478:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(0),s=n.n(c),u=n(480),l=n(82),f=n(479),p=n(151),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(){n.setState(u.a.getState())},n.state=u.a.getState(),n}return i(t,e),h(t,[{key:"componentWillMount",value:function(){this.eventSubscription=u.a.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){this.eventSubscription.remove()}},{key:"componentDidMount",value:function(){this.state.isInitialised||l.j()}},{key:"render",value:function(){var e=this.state,t=e.isInitialised,n=e.sages;return s.a.createElement("div",{className:"container"},s.a.createElement("h2",null,"Sages"),t?[].concat(a(n.values())).map(function(e,t){return s.a.createElement(f.a,{key:t,sage:e})}):s.a.createElement(p.a,null))}}]),t}(s.a.Component);t.a=m},479:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),c=n.n(i),s=n(69),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props.sage;return c.a.createElement("div",{className:"col-md-2 col-xs-4"},c.a.createElement(s.Link,{to:"/sage/detail/"+e.id,className:"thumbnail"},c.a.createElement("div",{className:"text-center text-info min-height-120"},c.a.createElement("i",{className:"fa fa-user fa-5x"}),c.a.createElement("h5",null,e.name))))}}]),t}(c.a.Component);t.a=l},480:function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=n(152),s=n(82),u=n(105),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,function(){return{sages:new Map,validations:new Map,isInitialised:!1}}));return n._updateSages=function(e){n._state=Object.assign({},n._state,{sages:e,isInitialised:!0}),n.emitChange()},n}return i(t,e),l(t,[{key:"getState",value:function(){return this._state}},{key:"_onDispatch",value:function(e){var t=this._updateSages;switch(e.type){case s.i.LOADED_SAGES:var n=e.payload;t(new Map([].concat(a(n.map(function(e){return[e.id,e]})))))}}}]),t}(c.a),p=new f(u.a);t.a=p},481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(150),r=(n.n(a),n(0)),o=(n.n(r),n(30)),i=n.n(o),c=n(69),s=n(468);i.a.render(r.createElement(c.Router,{history:c.hashHistory},n.i(s.a)()),document.getElementById("content"))},482:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),function(e){var t=e.label,n=e.value;return a.createElement("div",{className:"form-group"},a.createElement("div",{className:"col-sm-2"},a.createElement("strong",null,t)),a.createElement("div",{className:"col-sm-10"},n))});t.a=r},483:function(e,t,n){"use strict";var a=n(0),r=(n.n(a),function(e){var t=e.label,n=e.name,r=e.value,o=e.onFieldChange,i=e.errors,c=i.get(n);return a.createElement("div",{className:"form-group "+(c?"has-error":"")},a.createElement("label",{className:"col-sm-2 control-label"},t),a.createElement("div",{className:"col-sm-10"},a.createElement("input",{className:"form-control",type:e.type||"text",name:n,value:r,onChange:o})),c?a.createElement("div",{className:"col-md-offset-2 col-sm-10 text-danger"},c):null)});t.a=r},484:function(e,t,n){"use strict";function a(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new Error(e.statusText))}function r(e){return e.json()}n.d(t,"a",function(){return o}),t.b=a,t.c=r,n.d(t,"d",function(){return i});var o=function(){return"https://proverb-api.azurewebsites.net/"},i={Accept:"application/json","Content-Type":"application/json"}},485:function(e,t,n){"use strict";function a(){return fetch(u).then(c.b).then(function(e){return n.i(c.c)(e)}).then(s.d)}function r(e){return fetch(u+"/"+e).then(c.b).then(function(e){return n.i(c.c)(e)}).then(s.e)}function o(e){return fetch(u+"/"+e,{method:"DELETE"}).then(c.b).then(function(t){return n.i(s.f)(e)})}function i(e){return fetch(u,{headers:c.d,method:"POST",body:JSON.stringify(e)}).then(c.b).then(function(e){return n.i(c.c)(e)}).then(function(e){e.isSaved?n.i(s.g)(e.savedId):n.i(s.h)(e.validations)}).catch(s.h)}var c=n(484),s=n(82);t.a=a,t.b=r,t.c=o,t.d=i;var u=n.i(c.a)()+"sage"},486:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(152),c=n(239),s=n(105),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,function(){return{greetings:[],newGreeting:""}}))}return o(t,e),u(t,[{key:"getState",value:function(){return this._state}},{key:"_onDispatch",value:function(e){switch(e.type){case c.a.ADD_GREETING:this._state.newGreeting="",this._state.greetings=this._state.greetings.concat(e.payload),this.emitChange();break;case c.a.REMOVE_GREETING:this._state.greetings=this._state.greetings.filter(function(t){return t!==e.payload}),this.emitChange();break;case c.a.NEW_GREETING_CHANGED:this._state.newGreeting=e.payload,this.emitChange()}}}]),t}(i.a),f=new l(s.a);t.a=f},487:function(e,t,n){"use strict";function a(e){return e?""+e:""}function r(e){return e?""+e.substr(0,10):""}t.a=a,t.b=r},82:function(e,t,n){"use strict";function a(){c.a.dispatch({type:u.LOADING_SAGES}),s.a()}function r(e){c.a.dispatch({type:u.LOAD_SAGE}),s.b(e)}function o(e){return c.a.dispatch({type:u.REMOVE_SAGE}),s.c(e)}function i(e){return c.a.dispatch({type:u.SAVE_SAGE,payload:e}),s.d(e)}var c=n(105),s=n(485);n.d(t,"i",function(){return u}),t.j=a,t.c=r,t.b=o,t.a=i,n.d(t,"d",function(){return l}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return p}),n.d(t,"g",function(){return h}),n.d(t,"h",function(){return m});var u={LOADING_SAGES:"SageActionTypes.LOADING_SAGES",LOADED_SAGES:"SageActionTypes.LOADED_SAGES",LOAD_SAGE:"SageActionTypes.LOAD_SAGE",LOADED_SAGE:"SageActionTypes.LOADED_SAGE",REMOVE_SAGE:"SageActionTypes.REMOVE_SAGE",REMOVED_SAGE:"SageActionTypes.REMOVED_SAGE",SAVE_SAGE:"SageActionTypes.SAVE_SAGE",SAVED_SAGE:"SageActionTypes.SAVED_SAGE",SAVE_SAGE_FAILED:"SageActionTypes.SAVE_SAGE_FAILED",CLEAR_VALIDATIONS:"SageActionTypes.CLEAR_VALIDATIONS",CLEAR_SAVED_ID:"SageActionTypes.CLEAR_SAVED_ID"},l=function(e){return c.a.dispatch({type:u.LOADED_SAGES,payload:e})},f=function(e){return c.a.dispatch({type:u.LOADED_SAGE,payload:e})},p=function(e){return c.a.dispatch({type:u.REMOVED_SAGE,payload:e})},h=function(e){return c.a.dispatch({type:u.SAVED_SAGE,payload:e})},m=function(e){return c.a.dispatch({type:u.SAVE_SAGE_FAILED,payload:e})}}},[481]);