<template>
	<div>
		<p><h1>{{ msg }}</h1></p>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		name: "Ping",
		data(){
			return{
				msg: "",
			};
		},
		methods:{
			getMessage(){
				const path = 'http://localhost:5000/ping';
				axios.get(path).then((res) => {
					this.msg = res.data;
				}).catch((error) => {
					console.error(error);
				});
			}
		},
		created(){
			this.getMessage();
		}
	};
</script>