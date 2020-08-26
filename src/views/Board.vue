<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <div class="column" v-for="(column, $columnIndex) of board.columns" :key="$columnIndex">
        <div class="flex items-center mb-2 font-bold">{{ column.name }}</div>
        <div class="list-reset">
          <div class="task" v-for="(task, $taskIndex) of column.tasks" :key="$taskIndex">
            <span class="w-full flex-no-shrink font-bold">{{ task.name }}</span>
            <p
              class="w-full flex-no-shrink mt-1 text-sm"
              v-if="task.description"
            >{{ task.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['board'])
}
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
