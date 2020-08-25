<template>
  <div class="board"></div>
</template>

<script>
export default {}
</script>

<style lang="css">
.task {
  @apply flex;
  @apply items-center;
  @apply flex-wrap;
  @apply shadow;
  @apply mb-2;
  @apply py-2;
  @apply px-2;
  @apply rounded;
  @apply bg-white;
  @apply text-grey-darkest;
  @apply no-underline;
}

.column {
  @apply bg-grey-light;
  @apply p-2;
  @apply mr-4;
  @apply text-left;
  @apply shadow;
  @apply rounded;
  min-width: 350px;
}

.board {
  @apply p-4;
  @apply bg-teal-dark;
  @apply h-full;
  @apply overflow-auto;
}

.task-bg {
  @apply pin;
  @apply absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>
