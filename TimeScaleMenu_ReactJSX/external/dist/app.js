/** @jsx React.DOM */
(function() {

	'use strict';

	var TimeScaleRoot = React.createClass({

       render : function() {
          return  <div id="wrap">
		  <ul id = "navbar">
			 
			 <li><a href="#">File</a>
				<ul>
				   <li><a href="#">Replace Data with Default Datapack</a></li>
				   <li><a href="#">Re-add Default Datapack</a></li>
				   <li><a href="#">Add Datapack</a></li>
				   <li><a href="#">Exit</a></li>
				</ul>         
			 </li>
			 <li><a href="#">Image</a>
				<ul>
				   <li><a href="#" >Settings</a></li>
				   <li><a href="#">Generate Chart</a></li>
				 </ul>         
			 </li>
			 <li><a href="#">Crossplot</a>
				<ul>
				   <li><a href="#">Create Crossplot</a></li>
				   
				</ul>         
			 </li>
			 <li><a href="#">Help</a>
				<ul>
				   <li><a href="#">Language</a></li>
				   <li><a href="#">Quick Start Guide</a></li>
				   <li><a href="#">About</a></li>
				 </ul>         
			 </li>
			</ul>
</div>;

  
   }
	});

	
	
	React.render(<TimeScaleRoot/>,document.getElementById('container'));

	
	})();	