<template>
	<div class="stateChange">
		<!-- <div class="loading" v-show="loading">
			<img src="../assets/loading.gif" alt="">正在加载，请稍后...
		</div> -->
		<table class="table table-condensed table-hover">
			<thead>
				<tr>
					<th>服务号ID</th>
					<th>服务内容</th>
					<th>状态</th>
					<th>地址</th>
					<th>时间</th>
					<th>价格</th>
					<th>留言</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="state in stateList">
					<td>{{state.serviceNmber}}</td>
					<td>{{state.project}}</td>
					<td>{{state.state}}</td>
					<td>{{state.addr}}</td>
					<td>{{state.time}}</td>
					<td>{{state.price}}</td>
					<td>{{state.leaveWord}}</td>
					<td v-if="state.state == '进行中'">
						<button v-on:click="stateChange(state.serviceNmber)" class="btn btn-xs btn-info">{{state.state}}</button>
						<button v-on:click="delServe(state.serviceNmber)" class="btn btn-danger btn-xs">删除</button>
					</td>
					<td v-else>
						<button class="btn btn-xs btn-info" disabled>{{state.state}}</button>
						<button v-on:click="delServe(state.serviceNmber)" class="btn btn-danger btn-xs">删除</button>
					</td>
				</tr>
			</tbody>	
		</table>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name:'stateChange',
		data(){
			return {
				// stateList:[],
				// loading:true
			}
		},
		computed:{
			stateList(){
				return this.$store.state.stateList
			}
		},
		methods:{
			stateChange(serviceNmber){
				var changeStateWc = this.stateList.filter(function(item){
					return item.serviceNmber == serviceNmber
				})
				alert('已变成待评价状态');
				changeStateWc[0].state = "待评价";
				// 删除这条
				axios.delete('/appointList/' + changeStateWc[0].appointId + ".json")
				.then(res=>{
					console.log('删除成功')
				})
				// 然后在写入
				axios.post('/appointList.json',changeStateWc[0])
				.then(res=>{
					console.log("写入成功");
				})
			},
			delServe(serviceNmber){
				var changeStateWc = this.stateList.filter(function(item){
					return item.serviceNmber == serviceNmber
				})
				changeStateWc[0].state = "待评价";
				// 野狗删除这条
				axios.delete('/appointList/' + changeStateWc[0].appointId + ".json")
				.then(res=>{
					// vuex删除这条
					var index = this.stateList.indexOf(changeStateWc[0]);
					this.stateList.splice(index,1);
				})
			}
		},
		created(){
			
		}
	}
</script>
<style scoped>
	.loading{
		text-align: center;
	}
	.loading img{
		width: 20px;
		margin: 20px;
	}
</style>