<template>
	<div id="repair">
		<table class="table table-condensed table-hover">
			<thead>
				<tr>
					<th>名字</th>
					<th>地址</th>
					<th>功能</th>
					<th>距离</th>
					<th>评论个数</th>
					<th>单数</th>
					<th>总评分</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="repair in repairList">
					<td>{{repair.repairName}}</td>
					<td>{{repair.repairAddress}}</td>
					<td>{{repair.repairAction}}</td>
					<td>{{repair.repairDistance}}米</td>
					<td>{{repair.repairComment}}个</td>
					<td>{{repair.repairCount}}单</td>
					<td>{{repair.repairAllGrade}}分</td>
					<td>
					    <button v-on:click="delrepair(repair)" class="btn btn-warning btn-xs">删除</button>
					</td>
				</tr>
			</tbody>	
		</table>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				
			}
		},
		computed:{
			// 从vuex中获取
			repairList(){
				return this.$store.state.repairList
			}	
		},
		methods:{
			delrepair(repair){
				axios.delete('/repairList/'+ repair.id + '.json')
				.then(res=>{
					this.$store.commit('delrepair',repair)
				})

			}
		}
	}
</script>
<style scoped>
	
</style>