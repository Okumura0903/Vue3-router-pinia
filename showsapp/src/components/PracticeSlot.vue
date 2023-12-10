<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="body">
    <h1>Title</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae harum excepturi iste, voluptates autem impedit laboriosam molestias quisquam a dolore aliquam, repellendus culpa totam, adipisci eveniet quod explicabo ab sapiente!</p>
    <slot></slot>
  </div>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>