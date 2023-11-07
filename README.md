# SpaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

# Comandos para criar uma estrutura do projeto angular

## Criação de módulos
```shell
[bruno@fedora spa-angular]$ ng g module core
CREATE src/app/core/core.module.ts (190 bytes)
```

```shell
[bruno@fedora spa-angular]$ ng g module shared
CREATE src/app/shared/shared.module.ts (192 bytes)
```

```shell
[bruno@fedora spa-angular]$ ng g module feature-a --routing
CREATE src/app/feature-a/feature-a-routing.module.ts (251 bytes)
CREATE src/app/feature-a/feature-a.module.ts (289 bytes)
```

```shell
[bruno@fedora spa-angular]$ ng g module pessoa --routing
CREATE src/app/pessoa/pessoa-routing.module.ts (249 bytes)
CREATE src/app/pessoa/pessoa.module.ts (280 bytes)
```

 ```shell
[bruno@fedora spa-angular]$ ng g module empresa --routing
CREATE src/app/empresa/empresa-routing.module.ts (250 bytes)
CREATE src/app/empresa/empresa.module.ts (284 bytes)
 ```
```shell
[bruno@fedora spa-angular]$ ng g component empresa/empresa-detail
CREATE src/app/empresa/empresa-detail/empresa-detail.component.css (0 bytes)
CREATE src/app/empresa/empresa-detail/empresa-detail.component.html (29 bytes)
CREATE src/app/empresa/empresa-detail/empresa-detail.component.spec.ts (609 bytes)
CREATE src/app/empresa/empresa-detail/empresa-detail.component.ts (233 bytes)
UPDATE src/app/empresa/empresa.module.ts (398 bytes)
```

```shell
[bruno@fedora spa-angular]$ ng g component empresa/empresa-list
CREATE src/app/empresa/empresa-list/empresa-list.component.css (0 bytes)
CREATE src/app/empresa/empresa-list/empresa-list.component.html (27 bytes)
CREATE src/app/empresa/empresa-list/empresa-list.component.spec.ts (595 bytes)
CREATE src/app/empresa/empresa-list/empresa-list.component.ts (225 bytes)
UPDATE src/app/empresa/empresa.module.ts (502 bytes)
```