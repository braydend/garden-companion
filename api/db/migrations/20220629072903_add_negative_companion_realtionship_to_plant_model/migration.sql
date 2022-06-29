-- CreateTable
CREATE TABLE "_NegativeCompanions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_NegativeCompanions_A_fkey" FOREIGN KEY ("A") REFERENCES "Plant" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_NegativeCompanions_B_fkey" FOREIGN KEY ("B") REFERENCES "Plant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_NegativeCompanions_AB_unique" ON "_NegativeCompanions"("A", "B");

-- CreateIndex
CREATE INDEX "_NegativeCompanions_B_index" ON "_NegativeCompanions"("B");
