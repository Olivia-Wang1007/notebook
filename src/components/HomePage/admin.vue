<template>
<div>
        <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</div>

</template>
<script>
    export default {
        
    }
</script>