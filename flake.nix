{
  description = "Development environment in a flake.nix file for Nix users";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
  };

    outputs = { self, nixpkgs }:
      let
        system = "x86_64-linux";
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.${system}.default =
          pkgs.mkShell
            {
              buildInputs = [
                pkgs.bun
              ];
            };
      };
  }
