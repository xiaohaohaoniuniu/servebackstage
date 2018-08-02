<template>
	<div class="stateChange">
		<!-- <ul>
			<li v-for="state in stateList">
			{{state.addr}}</li>
		</ul> -->
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
				<tr>
					<td>7</td>
					<td>6</td>
					<td>5</td>
					<td>4</td>
					<td>2</td>
					<td>2</td>
					<td>2</td>
					<td>1</td>
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
				stateList:[]
			}
		},
		created(){
			axios.get('/appointList.json')
			.then(res=>{
				// console.log(res.data);
				var stateList = [];
				for(var k in res.data){
					res.data.stateId = k;
					stateList.push(res.data[k])
				}
				this.stateList = stateList;
				console.log(stateList)
			})
		}
	}
</script>
<style>
	
</style>