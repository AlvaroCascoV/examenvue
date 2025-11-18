<template>
	<div>
		<h1>HOME</h1>
		<table class="table table-primary table-bordered">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Imagen</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="cubo in cubos" :key="cubo">
					<td>{{ cubo.nombre }}</td>
					<td>
						<img
							:src="cubo.imagen"
							style="width: 150px"
							:alt="'imagen de ' + cubo.nombre"
						/>
					</td>
					<td>{{ cubo.precio }} €</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import ServiceCubos from "@/services/ServiceCubos";
	const service = new ServiceCubos();

	export default {
		name: "HomeComponent",
		data() {
			return {
				cubos: null,
			};
		},
		mounted() {
			this.getCubos();
		},
		methods: {
			getCubos() {
				service.getCubos().then((response) => {
					this.cubos = response;
				});
			},
		},
	};
</script>
