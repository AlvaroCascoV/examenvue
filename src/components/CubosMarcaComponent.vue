<template>
	<div>
		<h1>
			Cubos de
			<span class="text-primary">{{ $route.params.marca }}</span>
		</h1>
		<table class="table table-primary table-bordered">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Imagen</th>
					<th>Precio</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="cubo in cubosMarca" :key="cubo">
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
		name: "CubosMarcaComponent",
		data() {
			return {
				cubosMarca: null,
			};
		},
		mounted() {
			let marca = this.$route.params.marca;
			service.findMarca(marca).then((result) => {
				this.cubosMarca = result;
			});
		},
	};
</script>
